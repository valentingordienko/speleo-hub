import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Pakistan.svg';

export function Pakistan(props: TBaseProps) {
  return (
    <Icon {...props} name="Pakistan">
      <SVG />
    </Icon>
  );
}
