import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteStyleOutline.svg';

export function DeleteStyleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DeleteStyleOutline">
      <SVG />
    </Icon>
  );
}
