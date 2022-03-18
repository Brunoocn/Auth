import styles from './styles.module.scss';

interface InputProps{
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export function InputForm({type, placeholder, value, onChange}:InputProps){
  return(
    <input 
      className={styles.input_form}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}