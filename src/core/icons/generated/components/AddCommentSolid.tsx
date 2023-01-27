import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddCommentSolid.svg';

export function AddCommentSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AddCommentSolid">
      <SVG />
    </Icon>
  );
}
